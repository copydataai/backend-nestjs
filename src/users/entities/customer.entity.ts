import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Customer extends Document {
  @Prop({ type: String, required: true })
  name: string;
  @Prop({ type: String, required: true })
  lastName: string;
  @Prop({ type: String })
  phone: string;
}

export const CustomerSchema = SchemaFactory.createForClass(Customer);
