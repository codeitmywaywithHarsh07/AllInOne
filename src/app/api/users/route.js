import connectMongo from '../../../../lib/mongoose.js';
import User from '../../../../models/User.js';

export async function GET(req) {
  await connectMongo();
  const users = await User.find();
  return new Response(JSON.stringify(users), { status: 200 });
}

export async function POST(req) {
  await connectMongo();
  const body = await req.json();

  const { name, email, preferences } = body;
  if (!name || !email) {
    return new Response(JSON.stringify({ error: 'Name and email are required' }), {
      status: 400,
    });
  }

  try {
    const newUser = await User.create({ name, email, preferences });
    return new Response(JSON.stringify(newUser), { status: 201 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}
