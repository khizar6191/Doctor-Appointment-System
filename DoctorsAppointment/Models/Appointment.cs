using System;
using System.Collections.Generic;

namespace doco.Models;

public partial class Appointment
{
    public int Id { get; set; }

    public int PatientId { get; set; }

    public TimeOnly Time { get; set; }

    public int DoctorId { get; set; }

    public int Status { get; set; }

    public DateOnly Date { get; set; }

    public virtual Doctor Doctor { get; set; } = null!;

    public virtual Patient Patient { get; set; } = null!;
}
