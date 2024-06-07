"use server";

import {saveMeal} from "@/lib/meals";
import {redirect} from "next/navigation";
import {revalidatePath} from "next/cache";

function isInValidText(text) {
  console.log(text);
  return !text || text.trim() === "";
}

export async function shareMeal(preState, formData) {
  "use server";

  const meal = {
    title: formData.get("title"),
    image: formData.get("image"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
  }

  if (isInValidText(meal.title) || isInValidText(meal.creator_email)) {
    return {
      message: "Invalid input"
    }
  }

  await saveMeal(meal);

  revalidatePath('/meals', 'layout')

  redirect('/meals');
}
