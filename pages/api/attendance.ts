import prisma from 'utils/prisma';

export default async function handler(req, res) {
  const {
    body: { id, status },
    method,
  } = req;
  if (method === 'POST') {
    const result = await prisma.person.update({
      data: {
        precenceStatus: status,
      },
      where: {
        id,
      },
    });
    res.status(200).json(result);
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${method} Not Allowed`);
  }
}
