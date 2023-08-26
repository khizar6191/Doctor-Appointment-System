using System;
using System.Collections.Generic;

namespace doco.Models;

public partial class Dayavailable
{
    public int DoctorId { get; set; }

    public int DayId { get; set; }

    public virtual Day Day { get; set; } = null!;

    public virtual Appointment Doctor { get; set; } = null!;
}
