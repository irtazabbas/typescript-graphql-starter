
export default {
  users: async (parent, args, { db: { User } }) => {
    return await User.find();
  }
}
