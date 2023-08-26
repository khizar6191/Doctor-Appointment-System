using System;
using System.Collections.Generic;

namespace doco.Models;

public partial class Question
{
    public int Id { get; set; }

    public string Questions { get; set; } = null!;

    public virtual ICollection<User> Users { get; set; } = new List<User>();
}
