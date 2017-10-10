export interface ITag {
    tagId: string;
    label: string;
    dataType: string;
    unit: string;
    isTransient: boolean;
    features: Array<string>;
}
