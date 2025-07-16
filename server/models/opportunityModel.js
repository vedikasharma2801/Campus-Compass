import mongoose from 'mongoose';

const opportunitySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  company: {
    type: String,
  },
  deadline: {
    type: Date,
  },
  description: {
    type: String,
    required: true,
  },
  tags: {
    type: [String],
    default: [],
  },
  url: {
    type: String,
  },
}, {
  timestamps: true,
});

const Opportunity = mongoose.model('Opportunity', opportunitySchema);
export default Opportunity;