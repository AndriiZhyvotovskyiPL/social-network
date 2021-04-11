import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus components", () => {
    test("ProfileStatus component should be create", () => {
        const component = create(<ProfileStatus status={'status to be here'}/>);
        const instance = component.getInstance();
        expect(instance.state.status).toBe('status to be here');
    });

    test("after creation <span> should be displayed", () => {
        const component = create(<ProfileStatus status={'status to be here'}/>);
        const root = component.root;
        let span = root.findByType('span');
        expect(span).not.toBeNull();
    });

    test("after creation <span> should contains correct status", () => {
        const component = create(<ProfileStatus status={'status to be here'}/>);
        const root = component.root;
        let span = root.findByType('span');
        expect(span.children[0]).toBe('status to be here');
    });

    test("after creation <input> shouldn't be displayed", () => {
        const component = create(<ProfileStatus status={'status to be here'}/>);
        const root = component.root;
        expect(() => {
            root.findByType('input');
        }).toThrow();
    });

    test("after double click displayed <input> and contains correct status", () => {
        const component = create(<ProfileStatus status={'status to be here'}/>);
        const root = component.root;
        let span = root.findByType('span');
        span.props.onDoubleClick();
        let input = root.findByType('input');
        expect(input.props.value).toBe('status to be here');
    });

    test("callback should be called", () => {
        const mockCallback = jest.fn();
        const component = create(<ProfileStatus status={'status to be here'} updateStatus={mockCallback}/>);
        const instance = component.getInstance();
        instance.deactivateEditMode();
        expect(mockCallback.mock.calls.length).toBe(1);
    });
});