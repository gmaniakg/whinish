export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    const formData = req.body;
    
    // Vercel 환경 변수에서 키를 가져옵니다.
    // 대시보드에서 WEB3FORMS_ACCESS_KEY를 설정해야 합니다.
    const accessKey = process.env.WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
      return res.status(500).json({ message: 'API Key not configured in Vercel' });
    }

    // Web3Forms로 데이터 전송
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        ...formData,
        access_key: accessKey
      })
    });

    const result = await response.json();

    if (result.success) {
      return res.status(200).json(result);
    } else {
      return res.status(400).json(result);
    }
  } catch (error) {
    console.error('Contact API Error:', error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
}
