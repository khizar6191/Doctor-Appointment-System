using System;
using System.Collections.Generic;

namespace doco.Models;

public partial class Speciality
{
    public int Id { get; set; }

    public string SpecialitiesName { get; set; } = null!;

    public virtual ICollection<Doctor> Doctors { get; set; } = new List<Doctor>();
}
