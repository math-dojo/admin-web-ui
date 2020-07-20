export class QuestionQueueDto {
    public readonly messageText: string;

    public constructor({
        messageText
    }: {
        messageText: string
    }) {
        this.messageText = messageText;
    }

    static createDtoWithNonEmptyFields({
        messageText = ''
    } = {}): QuestionQueueDto {
        return new QuestionQueueDto({
            messageText
        });
    }

}
