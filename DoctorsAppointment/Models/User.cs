using System;
using System.Collections.Generic;

namespace doco.Models;

public partial class User
{
    public int Id { get; set; }

    public int? RoleId { get; set; }

    public string Email { get; set; } = null!;

    public string? Password { get; set; }

    public int QuestionId { get; set; }

    public string Answer { get; set; } = null!;

    public int Status { get; set; }

    public virtual ICollection<Doctor> Doctors { get; set; } = new List<Doctor>();

    public virtual ICollection<Patient> Patients { get; set; } = new List<Patient>();

    public virtual Question Question { get; set; } = null!;

    public virtual Role? Role { get; set; }
}
