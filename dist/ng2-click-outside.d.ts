import { ElementRef, EventEmitter, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
export declare class ClickOutside implements OnInit, OnDestroy, OnChanges {
    private _el;
    attachOutsideOnClick: boolean;
    clickOutside: EventEmitter<Event>;
    constructor(_el: ElementRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
    ngOnChanges(changes: SimpleChanges): void;
    private _init();
    private _initOnClickBody();
    private _onClickBody(e);
}