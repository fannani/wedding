import prisma from 'utils/prisma';

export default async function handler(req, res) {
  const {
    body: { name, sessionId },
    method,
  } = req;
  if (method === 'POST') {
    const result = await prisma.person.create({
      data: {
        name,
        phone: '855',
        sessionId: parseInt(sessionId),
      },
    });
    res.status(200).json(result);
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${method} Not Allowed`);
  }
}
