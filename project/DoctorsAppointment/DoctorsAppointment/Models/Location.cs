using System;
using System.Collections.Generic;

namespace doco.Models;

public partial class Location
{
    public int Id { get; set; }

    public string LocationName { get; set; } = null!;

    public virtual ICollection<Doctor> Doctors { get; set; } = new List<Doctor>();
}
