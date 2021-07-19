import prisma from 'utils/prisma';

export default async function handler(req, res) {
  const {
    method,
    query: { id },
  } = req;
  if (method === 'GET') {
    const result = await prisma.person.findUnique({
      where: { id },
      include: { messages: true },
    });
    res.status(200).json(result);
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${method} Not Allowed`);
  }
}
