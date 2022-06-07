import { ListToTextPreviewProps } from "../typings/ListToTextProps";

type Properties = PropertyGroup[];

type PropertyGroup = {
    caption: string;
    propertyGroups?: PropertyGroup[];
    properties?: Property[];
};

type Property = {
    key: string;
    caption: string;
    description?: string;
    objectHeaders?: string[]; // used for customizing object grids
    objects?: ObjectProperties[];
    properties?: Properties[];
};

type Problem = {
    property?: string; // key of the property, at which the problem exists
    severity?: "error" | "warning" | "deprecation"; // default = "error"
    message: string; // description of the problem
    studioMessage?: string; // studio-specific message, defaults to message
    url?: string; // link with more information about the problem
    studioUrl?: string; // studio-specific link
};

type ObjectProperties = {
    properties: PropertyGroup[];
    captions?: string[]; // used for customizing object grids
};

// Can be extended to accept widget properties, and key arg extend keyof props - validation of correct property name; won't work for system props
function hideProperty(key: string, array: PropertyGroup[]): void {
    array.forEach((propertyGroup: PropertyGroup) => {
        if (propertyGroup.propertyGroups) {
            hideProperty(key, propertyGroup.propertyGroups);
        }

        const propertyFoundIndex = propertyGroup.properties?.findIndex((prop: Property) => prop.key === key);
        if (propertyFoundIndex && propertyFoundIndex !== -1) {
            propertyGroup.properties?.splice(propertyFoundIndex, 1);
        }
    });
}

export function getProperties(_values: ListToTextPreviewProps, defaultProperties: Properties): Properties {
    // Do the values manipulation here to control the visibility of properties in Studio and Studio Pro conditionally.
    /* Example
    if (values.myProperty === "custom") {
        delete defaultProperties.properties.myOtherProperty;
    }
    */
    if (!_values.addTabIndex) {
        hideProperty("TabIndex", defaultProperties);
    }
    return defaultProperties;
}

export function check(_values: ListToTextPreviewProps): Problem[] {
    const errors: Problem[] = [];
    // Add errors to the above array to throw errors in Studio and Studio Pro.
    /* Example
    if (values.myProperty !== "custom") {
        errors.push({
            property: `myProperty`,
            message: `The value of 'myProperty' is different of 'custom'.`,
            url: "https://github.com/myrepo/mywidget"
        });
    }
    */

    if (_values.listLimit! < -1) {
        errors.push({
            property: "listLimit",
            message: "Limit can not be lower than -1"
        });
    }
    return errors;
}
