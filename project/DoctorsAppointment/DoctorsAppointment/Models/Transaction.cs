using System;
using System.Collections.Generic;

namespace doco.Models;

public partial class Transaction
{
    public int Id { get; set; }

    public int DoctorId { get; set; }

    public int SubscriptionId { get; set; }

    public DateOnly PaymentDate { get; set; }

    public int Amount { get; set; }

    public string PaymentMethod { get; set; } = null!;

    public virtual Doctor Doctor { get; set; } = null!;

    public virtual Subscriptionplan Subscription { get; set; } = null!;
}
