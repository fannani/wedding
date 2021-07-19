import prisma from 'utils/prisma';

export default async function handler(req, res) {
  const { method } = req;
  if (method === 'GET') {
    const result = await prisma.message.findMany({ include: { person: true } });
    res.status(200).json(result);
  } else if (method === 'POST') {
    const {
      body: { id, message },
    } = req;
    const result = await prisma.message.create({
      data: {
        text: message,
        person: { connect: { id } },
      },
    });
    res.status(200).json(result);
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${method} Not Allowed`);
  }
}
