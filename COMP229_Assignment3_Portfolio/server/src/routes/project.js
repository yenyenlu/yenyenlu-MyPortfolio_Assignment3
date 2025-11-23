import { Router } from 'express'; import { requireAuth } from '../middleware/auth.js'; import { createProject,getProjects,getProject,updateProject,deleteProject } from '../controllers/projectController.js';
const r=Router();
r.get('/', getProjects); r.get('/:id', getProject);
r.post('/', requireAuth('admin'), createProject);
r.put('/:id', requireAuth('admin'), updateProject);
r.delete('/:id', requireAuth('admin'), deleteProject);
export default r;