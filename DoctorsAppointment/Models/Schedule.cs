using System;
using System.Collections.Generic;

namespace doco.Models;

public partial class Schedule
{
    public int Id { get; set; }

    public int DoctorId { get; set; }

    public TimeOnly StartTime { get; set; }

    public TimeOnly EndTime { get; set; }

    public DateOnly Date { get; set; }

    public virtual Doctor Doctor { get; set; } = null!;
}
