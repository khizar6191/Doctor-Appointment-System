using System;
using System.Collections.Generic;

namespace doco.Models;

public partial class Role
{
    public int Id { get; set; }

    public string RoleType { get; set; } = null!;

    public virtual ICollection<User> Users { get; set; } = new List<User>();
}
