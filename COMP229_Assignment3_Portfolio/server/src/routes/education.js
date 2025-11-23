import { Router } from 'express'; import { requireAuth } from '../middleware/auth.js'; import { createEducation,getEducations,getEducation,updateEducation,deleteEducation } from '../controllers/educationController.js';
const r=Router();
r.get('/', getEducations); r.get('/:id', getEducation);
r.post('/', requireAuth('admin'), createEducation);
r.put('/:id', requireAuth('admin'), updateEducation);
r.delete('/:id', requireAuth('admin'), deleteEducation);
export default r;