"use client";
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import * as db from "../../../Database";
import { BsGripVertical } from 'react-icons/bs';
import ModuleControls from './ModuleControls';
import { FormControl, ListGroup, ListGroupItem } from 'react-bootstrap';
import ModuleControlButtons from './ModuleControlButtons';
import LessonControlButtons from './LessonControlButtons';
import { v4 as uuidv4} from "uuid";
import { addModule, editModule, updateModule, deleteModule, setModules } from './reducer';
import { useSelector, useDispatch } from 'react-redux';
import * as client from "../../client";
type Lesson = {
    _id: string;
    name: string;
};
type Module = {
    _id: string;
    name: string;
    course: string;
    lessons?: Lesson[];
    editing?: boolean;
};
export default function Modules() {
    const { cid } = useParams();
    const [moduleName, setModuleName] = useState("");
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { modules } = useSelector((state: any) => state.modulesReducer);
    const dispatch = useDispatch();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const onUpdateModule = async (module: any) => {
        await client.updateModule(cid, module);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const newModules = modules.map((m: any) => m._id === module._id ? module : m);
        dispatch(setModules(newModules));
    };
    const fetchModules = async () => {
        const modules = await client.findModulesForCourse(cid as string);
        dispatch(setModules(modules));
    };
    const onCreateModuleForCourse = async () => {
        if (!cid) return;
        const newModule = { name: moduleName, course: cid as string};
        const modules = await client.createModuleForCourse(cid as string, newModule);
        dispatch(setModules([...modules, module]));
    };
    const onRemoveModule = async (moduleId: string) => {
        await client.deleteModule(cid, moduleId);
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        dispatch(setModules(modules.filter((m: any) => m._id !== moduleId)));
    };
    useEffect(() => {
        fetchModules();
    }, []);
    return (
        <div className="ps-4">
            <ModuleControls setModuleName={setModuleName} moduleName={moduleName} 
            addModule={onCreateModuleForCourse}  /><br /><br /><br /><br />
            <ListGroup id="wd-modules" className="rounded-0">
                {modules
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    .map((module: any) => (
                    <ListGroupItem key={module._id}
                        className="wd-module p-0 me-5 fs-5 border-gray">
                        <div className="wd-title p-3 ps-2 bg-secondary">
                            <BsGripVertical className="me-2 fs-3" />
                            {!module.editing && module.name}
                            { module.editing && (
                                <FormControl className="w-50 d-inline-block"
                                        onChange={(e) => dispatch(updateModule({...module, name: e.target.value}))}
                                        onKeyDown={(e) => {
                                            if (e.key === "Enter") {
                                                onUpdateModule({...module, editing: false});
                                            }
                                        }}
                                        defaultValue={module.name}/>
                            )}
                             <ModuleControlButtons moduleId={module._id} 
                             deleteModule={(moduleId) => onRemoveModule(moduleId)} 
                             editModule={(moduleId) => dispatch(editModule(moduleId))} />
                        </div>
                        {module.lessons && (
                            <ListGroup className="wd-lessons rounded-0">
                                {module.lessons.map((lesson: Lesson) => (
                                    <ListGroupItem key={lesson._id} className="wd-lesson p-3 ps-1">
                                        <BsGripVertical className="me-2 fs-3" /> {lesson.name} <LessonControlButtons />
                                    </ListGroupItem>
                                ))}
                            </ListGroup>
                        )}
                    </ListGroupItem>
                ))}
            </ListGroup>
        </div>
    )
}