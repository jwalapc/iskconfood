import React from "react";

export const DonationDetails = () => {
  const bankDetails = {
    bankName: "Indian Overseas Bank (IOB)",
    accountName: "ISKCON FOOD FOR CHILD",
    accountNumber: "124501000022099",
    ifscCode: "IOBA0001245",
  };

  const details = [
    {
      detailLabel: "Bank Name",
      detailValue: bankDetails.bankName,
    },
    {
      detailLabel: "Account Name",
      detailValue: bankDetails.accountName,
    },
    {
      detailLabel: "Account Number",
      detailValue: bankDetails.accountNumber,
    },
    {
      detailLabel: "IFSC Code",
      detailValue: bankDetails.ifscCode,
    },
    {
      detailLabel: "UPI ID",
      detailValue: "iskconfoodforchild@iob",
    },
    {
      detailLabel: "Paytm Number",
      detailValue: "7400056919",
    },
  ];

  const copyToClipboard = (text) => {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
  };

  return (
    <div className="donation-details">
      <div className="table-responsive custom-table-container">
        <table className="table table-bordered custom-small-table">
          <tbody>
            {details.map((item, index) => (
              <tr key={index}>
                <td className="detail-label">{item.detailLabel}</td>
                <td className="detail-value">{item.detailValue}</td>
                <td className="copy-button-column">
                  <button
                    className="btn btn-primary"
                    onClick={() => copyToClipboard(item.detailValue)}
                  >
                    Copy
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="attractive-para">
        <p><h3>
        *Please share your transaction details on
</h3>
          <br />
          Email: Pranav@iskconmumbai.com
          <br />
          WhatsApp: +91-6263756519
        </p>
      </div>
    </div>
  );
};
