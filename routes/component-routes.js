import express from "express";
import { PrismaClient } from "@prisma/client";

const router = express.Router();
const prisma = new PrismaClient();

router.post("/add_component", async (req, res) => {
  try {
    const { title, html_code, css_code, js_code, tags } = req.body;

    const components = await prisma.components.create({
      data: {
        title: title,
        html_code: html_code,
        css_code: css_code,
        js_code: js_code,
        tags: tags,
      },
    });

    res.json({ components: components });
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
});

router.post("/add_tag", async (req, res) => {
  try {
    const { tag_name } = req.body;

    const tags = await prisma.tags.create({
        data: {
          tag_name: tag_name,
        },
      });

    res.json({ tag: tags });
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
});

router.get("/tags", async (req, res) => {
    try {
      const tags = await prisma.tags.findMany();
  
      res.json({ tag: tags });
    } catch (error) {
      res.status(401).json({ error: error.message });
    }
});

router.get("/get_components", async (req, res) => {
  try {
    const components = await prisma.components.findMany();

    res.json({ components: components });
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
});

export default router;
