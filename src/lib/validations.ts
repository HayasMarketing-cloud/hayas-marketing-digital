import { z } from "zod";

// Base email schema with strict validation
export const EmailSchema = z
  .string()
  .trim()
  .min(1, "El email es requerido")
  .email("Formato de email inválido")
  .max(255, "El email debe tener menos de 255 caracteres")
  .toLowerCase();

// URL schema with proper validation
export const URLSchema = z
  .string()
  .trim()
  .url("Formato de URL inválido")
  .max(500, "La URL debe tener menos de 500 caracteres")
  .optional()
  .or(z.literal(""));

// Contact form validation schema
export const ContactFormSchema = z.object({
  nombre: z
    .string()
    .trim()
    .min(1, "El nombre es requerido")
    .max(100, "El nombre debe tener menos de 100 caracteres"),
  email: EmailSchema,
  ayuda: z.string().optional(),
  telefono: z
    .string()
    .trim()
    .max(20, "El teléfono debe tener menos de 20 caracteres")
    .optional(),
  empresa: z
    .string()
    .trim()
    .max(100, "La empresa debe tener menos de 100 caracteres")
    .optional(),
  mensaje: z
    .string()
    .trim()
    .max(2000, "El mensaje debe tener menos de 2000 caracteres")
    .optional(),
  acceptCommunications: z.boolean().refine((val) => val === true, {
    message: "Debes aceptar recibir comunicaciones",
  }),
});

// Freelancer form validation schema
export const FreelancerFormSchema = z.object({
  nombre: z
    .string()
    .trim()
    .min(1, "El nombre es requerido")
    .max(100, "El nombre debe tener menos de 100 caracteres"),
  email: EmailSchema,
  especialidad: z
    .string()
    .trim()
    .min(1, "La especialidad es requerida")
    .max(100, "La especialidad debe tener menos de 100 caracteres"),
  experiencia: z
    .string()
    .trim()
    .min(1, "La experiencia es requerida")
    .max(50, "La experiencia debe tener menos de 50 caracteres"),
  portfolio: URLSchema,
  linkedin: URLSchema,
  descripcion: z
    .string()
    .trim()
    .max(1000, "La descripción debe tener menos de 1000 caracteres")
    .optional(),
  acceptCommunications: z.boolean().refine((val) => val === true, {
    message: "Debes aceptar recibir comunicaciones",
  }),
});

export type ContactFormData = z.infer<typeof ContactFormSchema>;
export type FreelancerFormData = z.infer<typeof FreelancerFormSchema>;
