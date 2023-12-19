import { JsonObject, JsonProperty, JsonSerializer } from '../../src';

@JsonObject()
export class Society {
    @JsonProperty({ required: true }) id = '4';
    @JsonProperty({ name: 'someName', postName: 'otherName' }) name: string;
    @JsonProperty({ name: 'Size' }) size?: string;
}

const something = () => {
    const h = new Society();
    h.name = 'Test';
    h.size = undefined;
    const defaultSerializer = new JsonSerializer({
        nullishPolicy: {
            undefined: 'allow',
            null: 'allow'
        },
        usePostName: true,
        formatPropertyName: (propertyName: string) => `_${propertyName}`
    });
    const s = defaultSerializer.serialize(h);
    console.log(s);
};

something();
