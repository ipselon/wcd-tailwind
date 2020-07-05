import PropTypes from "prop-types";

export interface OverflowProps {
    default: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
}

export const OverflowTypes = {
    /**
     * #### all media
     * * Use `overflow-auto` to add scrollbars to an element in the event that its content overflows the bounds of that element. Unlike `overflow-scroll` which always show scrollbars, this utility will only show them if scrolling is necessary.
     * * Use `overflow-hidden` to clip any content within an element that overflows the bounds of that element.
     * * Use `overflow-visible` to prevent content within an element from being clipped. Note that any content that overflows the bounds of the element will then be visible.
     * * Use `overflow-scroll` to add scrollbars to an element. Unlike `overflow-auto` which only shows scrollbars if they are necessary, this utility always shows them. Note that some operating systems (like macOS) hide unnecessary scrollbars regardless of this setting.
     * * Use `overflow-x-auto` to allow horizontal scrolling if needed.
     * * Use `overflow-y-auto` to allow vertical scrolling if needed.
     * * Use `overflow-x-scroll` to allow horizontal scrolling and always show scrollbars unless always-visible scrollbars are disabled by the operating system.
     * * Use `overflow-y-scroll` to allow vertical scrolling and always show scrollbars unless always-visible scrollbars are disabled by the operating system.
     * * Use `scrolling-touch` to use momentum-based scrolling (where supported) on touch devices.
     * * Use `scrolling-auto` to use normal non-momentum-based scrolling on touch devices. This is mostly useful for undoing `scrolling-touch` at larger screen sizes.
     */
    default: PropTypes.oneOf([
        '',
        'overflow-auto',
        'overflow-hidden',
        'overflow-visible',
        'overflow-scroll',
        'overflow-x-auto',
        'overflow-y-auto',
        'overflow-x-hidden',
        'overflow-y-hidden',
        'overflow-x-visible',
        'overflow-y-visible',
        'overflow-x-scroll',
        'overflow-y-scroll',
        'scrolling-touch',
        'scrolling-auto',
    ]),
    /**
     * #### @media (min-width: 640px)
     * * Use `overflow-auto` to add scrollbars to an element in the event that its content overflows the bounds of that element. Unlike `overflow-scroll` which always show scrollbars, this utility will only show them if scrolling is necessary.
     * * Use `overflow-hidden` to clip any content within an element that overflows the bounds of that element.
     * * Use `overflow-visible` to prevent content within an element from being clipped. Note that any content that overflows the bounds of the element will then be visible.
     * * Use `overflow-scroll` to add scrollbars to an element. Unlike `overflow-auto` which only shows scrollbars if they are necessary, this utility always shows them. Note that some operating systems (like macOS) hide unnecessary scrollbars regardless of this setting.
     * * Use `overflow-x-auto` to allow horizontal scrolling if needed.
     * * Use `overflow-y-auto` to allow vertical scrolling if needed.
     * * Use `overflow-x-scroll` to allow horizontal scrolling and always show scrollbars unless always-visible scrollbars are disabled by the operating system.
     * * Use `overflow-y-scroll` to allow vertical scrolling and always show scrollbars unless always-visible scrollbars are disabled by the operating system.
     * * Use `scrolling-touch` to use momentum-based scrolling (where supported) on touch devices.
     * * Use `scrolling-auto` to use normal non-momentum-based scrolling on touch devices. This is mostly useful for undoing `scrolling-touch` at larger screen sizes.
     */
    sm: PropTypes.oneOf([
        '',
        'overflow-auto',
        'overflow-hidden',
        'overflow-visible',
        'overflow-scroll',
        'overflow-x-auto',
        'overflow-y-auto',
        'overflow-x-hidden',
        'overflow-y-hidden',
        'overflow-x-visible',
        'overflow-y-visible',
        'overflow-x-scroll',
        'overflow-y-scroll',
        'scrolling-touch',
        'scrolling-auto',
    ]),
    /**
     * #### @media (min-width: 768px)
     * * Use `overflow-auto` to add scrollbars to an element in the event that its content overflows the bounds of that element. Unlike `overflow-scroll` which always show scrollbars, this utility will only show them if scrolling is necessary.
     * * Use `overflow-hidden` to clip any content within an element that overflows the bounds of that element.
     * * Use `overflow-visible` to prevent content within an element from being clipped. Note that any content that overflows the bounds of the element will then be visible.
     * * Use `overflow-scroll` to add scrollbars to an element. Unlike `overflow-auto` which only shows scrollbars if they are necessary, this utility always shows them. Note that some operating systems (like macOS) hide unnecessary scrollbars regardless of this setting.
     * * Use `overflow-x-auto` to allow horizontal scrolling if needed.
     * * Use `overflow-y-auto` to allow vertical scrolling if needed.
     * * Use `overflow-x-scroll` to allow horizontal scrolling and always show scrollbars unless always-visible scrollbars are disabled by the operating system.
     * * Use `overflow-y-scroll` to allow vertical scrolling and always show scrollbars unless always-visible scrollbars are disabled by the operating system.
     * * Use `scrolling-touch` to use momentum-based scrolling (where supported) on touch devices.
     * * Use `scrolling-auto` to use normal non-momentum-based scrolling on touch devices. This is mostly useful for undoing `scrolling-touch` at larger screen sizes.
     */
    md: PropTypes.oneOf([
        '',
        'overflow-auto',
        'overflow-hidden',
        'overflow-visible',
        'overflow-scroll',
        'overflow-x-auto',
        'overflow-y-auto',
        'overflow-x-hidden',
        'overflow-y-hidden',
        'overflow-x-visible',
        'overflow-y-visible',
        'overflow-x-scroll',
        'overflow-y-scroll',
        'scrolling-touch',
        'scrolling-auto',
    ]),
    /**
     * #### @media (min-width: 1024px)
     * * Use `overflow-auto` to add scrollbars to an element in the event that its content overflows the bounds of that element. Unlike `overflow-scroll` which always show scrollbars, this utility will only show them if scrolling is necessary.
     * * Use `overflow-hidden` to clip any content within an element that overflows the bounds of that element.
     * * Use `overflow-visible` to prevent content within an element from being clipped. Note that any content that overflows the bounds of the element will then be visible.
     * * Use `overflow-scroll` to add scrollbars to an element. Unlike `overflow-auto` which only shows scrollbars if they are necessary, this utility always shows them. Note that some operating systems (like macOS) hide unnecessary scrollbars regardless of this setting.
     * * Use `overflow-x-auto` to allow horizontal scrolling if needed.
     * * Use `overflow-y-auto` to allow vertical scrolling if needed.
     * * Use `overflow-x-scroll` to allow horizontal scrolling and always show scrollbars unless always-visible scrollbars are disabled by the operating system.
     * * Use `overflow-y-scroll` to allow vertical scrolling and always show scrollbars unless always-visible scrollbars are disabled by the operating system.
     * * Use `scrolling-touch` to use momentum-based scrolling (where supported) on touch devices.
     * * Use `scrolling-auto` to use normal non-momentum-based scrolling on touch devices. This is mostly useful for undoing `scrolling-touch` at larger screen sizes.
     */
    lg: PropTypes.oneOf([
        '',
        'overflow-auto',
        'overflow-hidden',
        'overflow-visible',
        'overflow-scroll',
        'overflow-x-auto',
        'overflow-y-auto',
        'overflow-x-hidden',
        'overflow-y-hidden',
        'overflow-x-visible',
        'overflow-y-visible',
        'overflow-x-scroll',
        'overflow-y-scroll',
        'scrolling-touch',
        'scrolling-auto',
    ]),
    /**
     * #### @media (min-width: 1280px)
     * * Use `overflow-auto` to add scrollbars to an element in the event that its content overflows the bounds of that element. Unlike `overflow-scroll` which always show scrollbars, this utility will only show them if scrolling is necessary.
     * * Use `overflow-hidden` to clip any content within an element that overflows the bounds of that element.
     * * Use `overflow-visible` to prevent content within an element from being clipped. Note that any content that overflows the bounds of the element will then be visible.
     * * Use `overflow-scroll` to add scrollbars to an element. Unlike `overflow-auto` which only shows scrollbars if they are necessary, this utility always shows them. Note that some operating systems (like macOS) hide unnecessary scrollbars regardless of this setting.
     * * Use `overflow-x-auto` to allow horizontal scrolling if needed.
     * * Use `overflow-y-auto` to allow vertical scrolling if needed.
     * * Use `overflow-x-scroll` to allow horizontal scrolling and always show scrollbars unless always-visible scrollbars are disabled by the operating system.
     * * Use `overflow-y-scroll` to allow vertical scrolling and always show scrollbars unless always-visible scrollbars are disabled by the operating system.
     * * Use `scrolling-touch` to use momentum-based scrolling (where supported) on touch devices.
     * * Use `scrolling-auto` to use normal non-momentum-based scrolling on touch devices. This is mostly useful for undoing `scrolling-touch` at larger screen sizes.
     */
    xl: PropTypes.oneOf([
        '',
        'overflow-auto',
        'overflow-hidden',
        'overflow-visible',
        'overflow-scroll',
        'overflow-x-auto',
        'overflow-y-auto',
        'overflow-x-hidden',
        'overflow-y-hidden',
        'overflow-x-visible',
        'overflow-y-visible',
        'overflow-x-scroll',
        'overflow-y-scroll',
        'scrolling-touch',
        'scrolling-auto',
    ]),
};
