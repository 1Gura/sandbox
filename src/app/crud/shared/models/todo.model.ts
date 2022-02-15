import {BaseModel} from "../../../shared/models/base.model";

export class TodoModel extends BaseModel {
  public title: string = '';
  public description: string = '';
  public done: boolean = false;
}
