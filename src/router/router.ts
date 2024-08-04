import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'
import CardList from "../pages/CardList.vue";
import EditCard from "../pages/EditCard.vue";
import Camera from "../pages/Camera.vue";
import File from "../pages/File.vue";
import SelectMode from "../pages/SelectMode.vue";
import CreateForm from "../pages/CreateForm.vue";
import CreateMassage from "../pages/CreateMassage.vue";
import Settings from "../pages/Settings.vue";

export const RoutesPath = {
    main: "/",
    create: "/create",
    select: "/select",
    edit: "/edit",
    camera: "/camera",
    file: "/file",
    complete: "/complete",
    settings: "/settings"
}


export const routes: RouteRecordRaw[] = [
    {path: RoutesPath.main, component: CardList},
    {path: RoutesPath.create, component: CreateForm},
    {path: RoutesPath.edit, component: EditCard},
    {path: RoutesPath.camera, component: Camera},
    {path: RoutesPath.file, component: File},
    {path: RoutesPath.select, component: SelectMode},
    {path: RoutesPath.complete, component: CreateMassage},
    {path: RoutesPath.settings, component: Settings}
]

export const router = createRouter({
    history: createWebHistory(),
    routes,
})
