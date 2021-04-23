const Business = require('../model/business')

exports.businessRegister = (req, res) => {
    console.log(req.body);
    console.log(req.files);
    res.json({ body: req.body });
    // res.status(200).json({ file: req.files, body: req.body });
    const { applyingAs, businessName, email, federalTaxId, DBA, businessPhoneNo, businessStartedDate, street, addressTwo, city, state, zipCode, monthlyRevenue,MerchantBusinessLoanAccount, involvedBankruptcy, hasBusinessOfOwner, OwnerFirstName, OwnerLastName, OwnerEmail, Ownership, SSN, FICO, DateOBApplicant, ownerPhoneNumber, KnowUs,TermsAndConditionsTrue, AllFiles } = req.body

    // res.status(201).json({ applyingAs, purposeOfLoan, businessName, email, federalTaxId, DBA, businessPhoneNo, businessStartedDate, street, addressTwo, city, state, zipCode, monthlyRevenue, receivedFunding, FirstSbaLoanNo, MerchantBusinessLoanAccount, involvedBankruptcy, ownerDefaultedLoss, hasBusinessOfOwner, gotDisasterLoan, OwnerFirstName, OwnerLastName, Ownership, SSN, FICO, DateOBApplicant, ownerPhoneNumber, PartnerFirstName, PartnerLastName, POwnership, PartnerSSN, partnerFICO, partnerPhoneNumber, PartnerDateOB, agreeWithLoanAcc, PromotionCode, KnowUs, message, TermsAndConditionsTrue })
    // SbaLoan.exec((error, user) => {
    //     if (user) {
    //         return res.status(400).json({ error: "Email has Taken" })
    //     }
    //     const { name, email, address, phoneNumber, state, zipcode } = req.body
    //     const agentId = shortid.generate()

    //     const newAgent = new Agent({ name, email, address, phoneNumber, state, zipcode, agentId, profile })
    //     newAgent.save((error, data) => {
    //         if (error) {
    //             return res.status(400).json({ message: "something went wrong" })
    //         }
    //         if (data) {
    //             return res.status(201).json({
    //                 message: "Agent Request Success ! You will know through email about confirmation"
    //             })
    //         }

    //     })
    // })
}



