/**
 * @coreapi
 * @module core
 */ /** */
import {StateParams} from "./params/stateParams";
import {StateDeclaration} from "./state/interface";
import {State} from "./state/stateObject";
import {Transition} from "./transition/transition";
import {Queue} from "./common/queue";
import {TransitionService} from "./transition/transitionService";
import {copy} from "./common/common";

/**
 * Global router state
 *
 * This is where we hold the global mutable state such as current state, current
 * params, current transition, etc.
 */
export interface UIRouterGlobals {
  /**
   * Current parameter values
   *
   * The parameter values from the latest successful transition
   */
  params: StateParams;
  /**
   * Current state
   *
   * The to-state from the latest successful transition
   */
  current: StateDeclaration;
  /**
   * Current state
   *
   * The to-state from the latest successful transition
   */
  $current: State;
  /**
   * The current transition (in progress)
   */
  transition: Transition;
}


/**
 * Global router state
 *
 * This is where we hold the global mutable state such as current state, current
 * params, current transition, etc.
 */
export class Globals implements UIRouterGlobals {
  /** @inheritdoc */
  params: StateParams = new StateParams();
  /** @inheritdoc */
  current: StateDeclaration;
  /** @inheritdoc */
  $current: State;
  /** @inheritdoc */
  transition: Transition;

  /** @internalapi */
  transitionHistory = new Queue<Transition>([], 1);

  /** @internalapi */
  successfulTransitions = new Queue<Transition>([], 1);
}
