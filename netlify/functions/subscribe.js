exports.handler = async function (event) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method not allowed' };
  }

  try {
    const { email } = JSON.parse(event.body);
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return { statusCode: 400, body: JSON.stringify({ error: 'Ungültige E-Mail-Adresse' }) };
    }

    const res = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'api-key': process.env.BREVO_API_KEY,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        email: email,
        listIds: [3],
        updateEnabled: true
      })
    });

    if (res.ok || res.status === 204) {
      return { statusCode: 200, body: JSON.stringify({ ok: true }) };
    }

    const data = await res.json().catch(() => ({}));
    if (data.code === 'duplicate_parameter') {
      return { statusCode: 200, body: JSON.stringify({ ok: true }) };
    }

    return { statusCode: res.status, body: JSON.stringify({ error: data.message || 'Brevo error' }) };
  } catch (err) {
    return { statusCode: 500, body: JSON.stringify({ error: 'Server error' }) };
  }
};
