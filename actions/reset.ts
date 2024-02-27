"use server";
import * as z from "zod";
import { getUserByEmail } from "@/data/user";
import { ResetSchema } from "@/schemas";
import { generatePasswordResetToken } from "@/lib/tokens";
import { sendPasswordResetEmail } from "@/lib/mail";

export const reset = async (values: z.infer<typeof ResetSchema>) => {
  const validatedFields = ResetSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid email!" };
  }

  const { email } = validatedFields.data;

  const existingUser = await getUserByEmail(email);

  if (!existingUser) {
    return { error: "Email not found!" };
  }

  // generate passwordResetToken and send via email
  const passwordResetToken = await generatePasswordResetToken(email);

  try {
    await sendPasswordResetEmail(
      passwordResetToken.email,
      passwordResetToken.token
    );
  } catch (err) {
    console.log("PROBLEM SENDING RESET EMAIL : error =>", err);
  }

  return { success: "Reset email sent!" };
};
