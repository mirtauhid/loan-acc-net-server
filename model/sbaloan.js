const mongoose = require('mongoose')
const { timeStamp } = require('console')

const sbaLoanSchema = mongoose.Schema({
    applyingAs: {
        type: String,
        trim: true,
        required: true,
        lowercase: true
    },
    purposeOfLoan: {
        type: String
    },
    businessName: {
        type: String,
        trim: true,
        required: true,
    },
    email: {
        type: String,
        trim: true,
        required: true,
        max: 40,
        lowercase: true
    },
    federalTaxId: {
        type: String,
        trim: true,
        required: true,
        max: 15,
    },
    DBA: {
        type: String,
        trim: true,
        required: true,
    },
    businessPhoneNo: {
        type: String,
        trim: true,
        required: true,
        max: 13,
    },
    businessStartedDate: {
        type: String,
        trim: true,
        required: true,
    },
    street: {
        type: String,
        trim: true,
        required: true,
    },
    addressTwo: {
        type: String,
        trim: true,
        required: true,
    },
    city: {
        type: String,
        trim: true,
        required: true,
    },
    state: {
        type: String,
        trim: true,
        required: true,
    },
    zipCode: {
        type: String,
        trim: true,
        required: true,
    },
    monthlyRevenue: {
        type: String,
        trim: true,
        required: true,
    },
    receivedFunding: {
        type: String,
        trim: true,
        required: true,
    },
    FirstSbaLoanNo: {
        type: String,
        trim: true,
        required: true,
    },
    MerchantBusinessLoanAccount: {
        type: String,
        trim: true,
        required: true,
    },
    involvedBankruptcy: {
        type: String,
        trim: true,
        required: true,
    },
    ownerDefaultedLoss: {
        type: String,
        trim: true,
        required: true,
    },
    hasBusinessOfOwner: {
        type: String,
        trim: true,
        required: true,
    },
    gotDisasterLoan: {
        type: String,
        trim: true,
        required: true,
    },
    OwnerFirstName: {
        type: String,
        trim: true,
        required: true,
    },
    OwnerLastName: {
        type: String,
        trim: true,
        required: true,
    },
    Ownership: {
        type: String,
        trim: true,
        required: true,
    },
    SSN: {
        type: String,
        trim: true,
        required: true,
    },
    FICO: {
        type: String,
        trim: true,
        required: true,
    },
    DateOBApplicant: {
        type: String,
        trim: true,
        required: true,
    },
    ownerPhoneNumber: {
        type: String,
        trim: true,
        required: true,
    },
    PartnerFirstName: {
        type: String,
        trim: true,
        required: true,
    },
    PartnerLastName: {
        type: String,
        trim: true,
        required: true,
    },
    POwnership: {
        type: String,
        trim: true,
        required: true,
    },
    PartnerSSN: {
        type: String,
        trim: true,
        required: true,
    },
    partnerFICO: {
        type: String,
        trim: true,
        required: true,
    },
    partnerPhoneNumber: {
        type: String,
        trim: true,
        required: true,
    },
    PartnerDateOB: {
        type: String,
        trim: true,
        required: true,
    },
    agreeWithLoanAcc: {
        type: String,
        trim: true,
        required: true,
    },
    PromotionCode: {
        type: String,
        trim: true,
        required: false,
    },
    KnowUs: {
        type: String,
        trim: true,
        required: true,
    },
    message: {
        type: String,
        trim: true,
        required: false,
    },
    TermsAndConditionsTrue: {
        type: String,
        trim: true,
        required: true,
    },
    // sbaPictures: [{ file: { type: String } }],
    updatedAt: Date,
},
    { timeStamp: true }
)
module.exports = mongoose.model('SbaLoan', sbaLoanSchema)