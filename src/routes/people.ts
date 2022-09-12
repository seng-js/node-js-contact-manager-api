import { Router } from "express";
const router = Router();

import {
  getPeople,
  getPeopleById,
  createPeople,
  updatePeople,
  deletePeople,
} from "../controllers/people.controller";

router.get("/people", getPeople);
router.get("/people.json", getPeople);
router.get("/people/:id", getPeopleById);
router.post("/people", createPeople);
router.patch("/people/:id", updatePeople);
router.delete("/people/:id", deletePeople);

export default router;
