import { connectToDatabase } from '../../lib/mongodb';
const ObjectId = require('mongodb').ObjectId;

export default async function handler(req, res) {
  // Switch the methods
  switch (req.method) {
    case 'GET': {
      return getPosts(req, res);
    }
    case 'POST': {
      return addPost(req, res);
    }
    case 'PUT': {
      return updatePost(req, res);
    }
    case 'DELETE': {
      return deletePost(req, res);
    }
  }
}

/*GETTING ALL POSTS
-------------------------------START----------------------------*/
async function getUsers(req, res) {
  try {
    let { db } = await connectToDatabase();
      let users = await db
          .collection('users')
          .find({})
          .sort()
          .toArray();

    return res.json({
      message: JSON.parse(JSON.stringify(users)),
      success: true,
    });
  } catch (error) {
    return res.json({
      message: new Error(error).message,
      success: false,
    });
  }
}
/*------------------------------END-----------------------------*/
