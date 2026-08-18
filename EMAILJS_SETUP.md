# Configuración de EmailJS

## Variables del template

El formulario envía exactamente estas variables:

- `{{from_name}}`
- `{{from_email}}`
- `{{subject}}`
- `{{message}}`

En la configuración del template, usa `{{from_email}}` en el campo **Reply-To**. El destinatario (**To Email**) debe ser tu propio correo y no una variable proporcionada por el visitante.

## Asunto sugerido

```text
Nuevo mensaje desde juancastellanos.dev: {{subject}}
```

## Contenido de texto sugerido

```text
Nuevo mensaje desde juancastellanos.dev

Nombre: {{from_name}}
Email: {{from_email}}
Asunto: {{subject}}

Mensaje:
{{message}}
```

## Contenido HTML sugerido

```html
<div style="font-family: Arial, sans-serif; max-width: 640px; margin: 0 auto; color: #18181b;">
  <h2 style="margin-bottom: 24px; color: #d97706;">Nuevo mensaje desde juancastellanos.dev</h2>
  <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
    <tr><td style="padding: 8px 0; font-weight: 700; width: 90px;">Nombre:</td><td>{{from_name}}</td></tr>
    <tr><td style="padding: 8px 0; font-weight: 700;">Email:</td><td>{{from_email}}</td></tr>
    <tr><td style="padding: 8px 0; font-weight: 700;">Asunto:</td><td>{{subject}}</td></tr>
  </table>
  <div style="padding: 20px; border: 1px solid #e4e4e7; border-radius: 8px; background: #fafafa;">
    <strong>Mensaje:</strong>
    <p style="white-space: pre-wrap; line-height: 1.6; margin-bottom: 0;">{{message}}</p>
  </div>
</div>
```

## Variables de entorno

Copia `.env.example` como `.env.local` y completa los valores obtenidos en el dashboard de EmailJS. Vite incluye únicamente variables con prefijo `VITE_` en el bundle del navegador; nunca coloques claves privadas en estas variables.
