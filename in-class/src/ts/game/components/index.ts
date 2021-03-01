import { Component, ScreenTextComponent } from "../../engine";
import { ChangeSceneComponent } from "./ChangeSceneComponent";
import { ClickToDestroyComponent } from "./ClickToDestroyComponent";
import { KeyboardBumpComponent } from "./KeyboardBumpComponent";
import { KeyboardMoveComponent } from "./KeyboardMoveComponent";
import { MoleMakerComponent } from "./MoleMakerComponent";
import { RectDrawComponent } from "./RectDrawComponent";
import { RectMoveComponent } from "./RectMoveComponent";
import { ScoreComponent } from "./ScoreComponent";

export const AllComponents: (typeof Component)[] = [ChangeSceneComponent, ClickToDestroyComponent,
    KeyboardBumpComponent, KeyboardMoveComponent, MoleMakerComponent, RectDrawComponent, RectMoveComponent,
    ScoreComponent, ScreenTextComponent];
