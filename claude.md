# Plantilla de citas — SolveTech

Sitio de una página con agendador de citas. Sirve para consultorios dentales, spas,
estéticas, barberías, veterinarias — cualquier negocio que venda por cita.

## Archivos

```
index.html          Estructura. Solo editas <title> y la meta description.
css/styles.css      Diseño. Los dos temas viven arriba del archivo.
js/config.js        ← AQUÍ editas todo para cada cliente nuevo.
js/app.js           Lógica. No la toques.
```

## Cliente nuevo en 10 minutos

1. Copia la carpeta completa.
2. Abre `js/config.js` y cambia:
   - `tema`: `"dental"` o `"spa"`
   - `negocio`: nombre, lema, teléfono, WhatsApp, dirección, mapa
   - `servicios`: nombre, descripción, duración y precio
   - `agenda.horarios`: días y horas de atención (`null` = cerrado)
   - `razones`, `testimonios`, `faq`
3. En `index.html` cambia el `<title>` y la `meta description`.
4. **Borra el bloque `<div class="demo-bar">`** y el `<!-- Barra de demo -->` completo.
5. Sube por FTP o arrastra la carpeta a Netlify. Listo.

### El número de WhatsApp

Va sin `+`, sin espacios y con código de país:
`526641649998` (52 = México, 664 = Tijuana).
Si lo pones mal, el botón abre WhatsApp con un número inexistente.

### El mapa

Google Maps → busca la dirección → Compartir → Insertar un mapa →
copia solo lo que está dentro de `src="..."` y pégalo en `mapaEmbed`.

## Cómo funciona el agendador

Tres pasos: servicio → día y hora → datos. Al confirmar abre WhatsApp con la cita
ya escrita. El negocio solo responde "confirmado".

Los horarios se generan solos a partir de `agenda.horarios` y `duracionMinutos`.
`anticipacionHoras` oculta los espacios demasiado próximos.

**Importante:** no bloquea espacios ya ocupados, porque no hay base de datos.
Para 1 o 2 sillas funciona perfecto. Si el cliente necesita disponibilidad real
y sincronía con su calendario, súbelo a Google Calendar Appointment Schedule o
Cal.com y cobra la integración aparte.

## Colores

Los dos temas están al inicio de `styles.css` como variables. Para adaptar a la
marca de un cliente basta con cambiar `--acento`, `--acento-vivo` y `--acento-tenue`.
El resto del sitio se ajusta solo.

## Antes de entregar

- [ ] Borrar la barra de demo del HTML
- [ ] Probar el botón de WhatsApp desde un celular real
- [ ] Revisar que el mapa cargue
- [ ] Cambiar `<title>` y meta description
- [ ] Agregar el favicon del cliente
