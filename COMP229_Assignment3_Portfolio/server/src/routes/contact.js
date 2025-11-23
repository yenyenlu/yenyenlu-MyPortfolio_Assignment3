import { Router } from 'express'; import { requireAuth } from '../middleware/auth.js'; import { createContact,getContacts,deleteContact } from '../controllers/contactController.js';
const r=Router();
r.post('/', createContact);
r.get('/', requireAuth('admin'), getContacts);
r.delete('/:id', requireAuth('admin'), deleteContact);
export default r;