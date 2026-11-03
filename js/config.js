/* Configuración de la aplicación */
export const CONFIG = {
  CREAWEB_URL: 'https://chachingt.com',
  FORMSPREE: 'https://formspree.io/f/xrengvqb',
  DOMINIO: 'empresagt.com',
  LIMITE_HTML: 900000,
  STORE_KEY: 'creaweb_estado_v1',
  RESERVADOS: ['www', 'admin', 'mail', 'correo', 'ftp', 'api', 'app', 'panel', 'creaweb', 'soporte', 'ayuda', 'test'],
  TEMPLATES: [
    { nombre: 'Empresas GT', icon: 'house', url: 'https://empresagt.com' }, 
    { nombre: 'Hospedaje Ku´ Kanche', icon: 'house', url: 'https://hospedajekukanche.chach.workers.dev' },     
    { nombre: 'Huevos JD', icon: 'egg', url: 'https://huevosjd.empresasgt.workers.dev' },
    { nombre: 'La Ola Cevichera', icon: 'utensils', url: 'https://laolacevichera.empresasgt.workers.dev' },    
    { nombre: 'CRM centralizador', icon: 'mail', url: 'https://app.chachingt.com' },    
    { nombre: 'ERP contable', icon: 'table', url: 'https://erp.chach.app' },
    { nombre: 'Venta de Materiales', icon: 'truck', url: 'https://ventadematerialeszorro.empresasgt.workers.dev' },   
    { nombre: 'Multi-Ceramica SJ', icon: 'store', url: 'https://ceramica-6fz.pages.dev' },
    { nombre: 'Farmacias', icon: 'target', url: 'https://farmacia2026.netlify.app' },    
    { nombre: 'Cleaning cap sp', icon: 'target', url: 'https://cleaningcapsp.com/admin.html' },    
    { nombre: 'Ferretería', icon: 'utensils', url: 'https://ferreteria2026.netlify.app' },
    { nombre: 'Café', icon: 'utensils', url: 'https://coffeeshop2026.netlify.app' },
    { nombre: 'Tienda', icon: 'leaf', url: 'https://apps2002.netlify.app' },
    { nombre: 'Cevicheria', icon: 'utensils', url: 'https://cevicheria2026.netlify.app' }, 
    { nombre: 'Artesanías', icon: 'shopping-cart', url: 'https://artesanas2026.netlify.app' },
    { nombre: 'Rutas Xekuku', icon: 'tag', url: 'https://rutasj.netlify.app' },
    { nombre: 'Restaurante', icon: 'utensils', url: 'https://restauran2026.netlify.app' },
    { nombre: 'GuiArte Atitlán gt', icon: 'box', url: 'https://guiarteatitlangt.netlify.app/admin.html' },
    { nombre: 'Ibcoxej', icon: 'school', url: 'https://ibcoxej.chach.app/admin.html' },
    { nombre: 'La casa del textil', icon: 'house', url: 'https://lacasadeltextil.chach.workers.dev' }, 
    { nombre: 'Transportes Navi', icon: 'car', url: 'https://navigt.chach.workers.dev' }, 
    { nombre: 'Mundos en Alianza', icon: 'trash', url: 'https://mundosenalianza.chach.app/admin.html' }, 
  ],
 };

export const SOCIAL_PATTERNS = /(facebook\.com|fb\.com|instagram\.com|tiktok\.com|wa\.me|whatsapp\.com|twitter\.com|x\.com|youtube\.com|youtu\.be|linkedin\.com|t\.me|telegram)/i;

export const SOCIAL_NAMES = [
  [/facebook|fb\.com/i, 'Facebook'],
  [/instagram/i, 'Instagram'],
  [/tiktok/i, 'TikTok'],
  [/wa\.me|whatsapp/i, 'WhatsApp'],
  [/twitter|x\.com/i, 'X / Twitter'],
  [/youtube|youtu\.be/i, 'YouTube'],
  [/linkedin/i, 'LinkedIn'],
  [/t\.me|telegram/i, 'Telegram']
];
