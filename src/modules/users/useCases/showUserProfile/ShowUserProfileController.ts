import { Request, Response } from "express";

import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase";

class ShowUserProfileController {
  constructor(private showUserProfileUseCase: ShowUserProfileUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.params;

    try {
      const userProfile = this.showUserProfileUseCase.execute({ user_id });
      return response.status(200).send(userProfile);
    } catch (err) {
      return response.status(404).send({ error: "user not found" });
    }
  }
}

export { ShowUserProfileController };
