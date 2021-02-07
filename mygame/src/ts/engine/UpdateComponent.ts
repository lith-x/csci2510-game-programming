import Component from "./Component";

export default abstract class UpdateComponent extends Component {
    abstract update(): void;
}
