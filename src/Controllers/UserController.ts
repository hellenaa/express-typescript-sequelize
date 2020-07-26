class UserController {
  constructor() {
    this.register = this.register.bind(this);
  }

  async register(name: any) {
    if (name === 'lena') {
      return true;
    }
    throw new Error('Wrong name');
  }
}
export default new UserController();
