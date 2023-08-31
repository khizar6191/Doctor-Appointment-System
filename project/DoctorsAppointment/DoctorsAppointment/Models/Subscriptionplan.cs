using System;
using System.Collections.Generic;

namespace doco.Models;

public partial class Subscriptionplan
{
    public int Id { get; set; }

    public string PlanName { get; set; } = null!;

    public string DescripOfSub { get; set; } = null!;

    public int MonthlyPrice { get; set; }

    public int Status { get; set; }

    public virtual ICollection<Transaction> Transactions { get; set; } = new List<Transaction>();
}
