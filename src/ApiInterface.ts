import {Server} from 'restify'

export default class ApiInterface {
    private _depends: ApiInterface[] = []

    hook(server: Server) {
        this._depends.forEach(d => d.hook(server))
    };

    protected addDependency(dependency: ApiInterface) {
        this._depends.push(dependency)
    }
}