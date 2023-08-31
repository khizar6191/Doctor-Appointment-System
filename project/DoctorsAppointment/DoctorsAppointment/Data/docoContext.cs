using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using doco.Models;

namespace doco.Data;

public partial class docoContext : DbContext
{
    public docoContext()
    {
    }

    public docoContext(DbContextOptions<docoContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Appointment> Appointments { get; set; }

    public virtual DbSet<Day> Days { get; set; }

    public virtual DbSet<Dayavailable> Dayavailables { get; set; }

    public virtual DbSet<Doctor> Doctors { get; set; }

    public virtual DbSet<Location> Locations { get; set; }

    public virtual DbSet<Patient> Patients { get; set; }

    public virtual DbSet<Question> Questions { get; set; }

    public virtual DbSet<Role> Roles { get; set; }

    public virtual DbSet<Schedule> Schedules { get; set; }

    public virtual DbSet<Speciality> Specialities { get; set; }

    public virtual DbSet<Subscriptionplan> Subscriptionplans { get; set; }

    public virtual DbSet<Transaction> Transactions { get; set; }

    public virtual DbSet<User> Users { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        => optionsBuilder.UseMySql("name=docoDB", Microsoft.EntityFrameworkCore.ServerVersion.Parse("8.0.33-mysql"));

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder
            .UseCollation("utf8mb4_0900_ai_ci")
            .HasCharSet("utf8mb4");

        modelBuilder.Entity<Appointment>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity.ToTable("appointments");

            entity.HasIndex(e => e.DoctorId, "doctor_id_");

            entity.HasIndex(e => e.PatientId, "patient_id_");

            entity.Property(e => e.Id).HasColumnName("id_");
            entity.Property(e => e.Date).HasColumnName("date_");
            entity.Property(e => e.DoctorId).HasColumnName("doctor_id_");
            entity.Property(e => e.PatientId).HasColumnName("patient_id_");
            entity.Property(e => e.Status).HasColumnName("status_");
            entity.Property(e => e.Time)
                .HasColumnType("time")
                .HasColumnName("time_");

            entity.HasOne(d => d.Doctor).WithMany(p => p.Appointments)
                .HasForeignKey(d => d.DoctorId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("appointments_ibfk_2");

            entity.HasOne(d => d.Patient).WithMany(p => p.Appointments)
                .HasForeignKey(d => d.PatientId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("appointments_ibfk_1");
        });

        modelBuilder.Entity<Day>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity.ToTable("days");

            entity.Property(e => e.Id)
                .ValueGeneratedNever()
                .HasColumnName("id_");
            entity.Property(e => e.Day1)
                .HasMaxLength(255)
                .HasColumnName("day_");
        });

        modelBuilder.Entity<Dayavailable>(entity =>
        {
            entity
                .HasNoKey()
                .ToTable("dayavailables");

            entity.HasIndex(e => e.DayId, "day_id_");

            entity.HasIndex(e => e.DoctorId, "doctor_id_");

            entity.Property(e => e.DayId).HasColumnName("day_id_");
            entity.Property(e => e.DoctorId).HasColumnName("doctor_id_");

            entity.HasOne(d => d.Day).WithMany()
                .HasForeignKey(d => d.DayId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("dayavailables_ibfk_2");

            entity.HasOne(d => d.Doctor).WithMany()
                .HasForeignKey(d => d.DoctorId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("dayavailables_ibfk_1");
        });

        modelBuilder.Entity<Doctor>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity.ToTable("doctors");

            entity.HasIndex(e => e.LocationId, "location_id_");

            entity.HasIndex(e => e.SpecialitiesId, "specialities_id_");

            entity.HasIndex(e => e.UserId, "user_id_");

            entity.Property(e => e.Id).HasColumnName("id_");
            entity.Property(e => e.Address)
                .HasMaxLength(255)
                .HasColumnName("address_");
            entity.Property(e => e.Contact)
                .HasMaxLength(255)
                .HasColumnName("contact_");
            entity.Property(e => e.Description)
                .HasMaxLength(255)
                .HasColumnName("description_");
            entity.Property(e => e.Email)
                .HasMaxLength(255)
                .HasColumnName("email_");
            entity.Property(e => e.Experience).HasColumnName("experience_");
            entity.Property(e => e.Fname)
                .HasMaxLength(255)
                .HasColumnName("fname_");
            entity.Property(e => e.Gender)
                .HasMaxLength(255)
                .HasColumnName("gender_");
            entity.Property(e => e.Lname)
                .HasMaxLength(255)
                .HasColumnName("lname_");
            entity.Property(e => e.LocationId).HasColumnName("location_id_");
            entity.Property(e => e.Password)
                .HasMaxLength(255)
                .HasColumnName("password_");
            entity.Property(e => e.Qualification)
                .HasMaxLength(255)
                .HasColumnName("qualification_");
            entity.Property(e => e.SpecialitiesId).HasColumnName("specialities_id_");
            entity.Property(e => e.Status).HasColumnName("status_");
            entity.Property(e => e.UserId).HasColumnName("user_id_");

            entity.HasOne(d => d.Location).WithMany(p => p.Doctors)
                .HasForeignKey(d => d.LocationId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("doctors_ibfk_1");

            entity.HasOne(d => d.Specialities).WithMany(p => p.Doctors)
                .HasForeignKey(d => d.SpecialitiesId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("doctors_ibfk_2");

            entity.HasOne(d => d.User).WithMany(p => p.Doctors)
                .HasForeignKey(d => d.UserId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("doctors_ibfk_3");
        });

        modelBuilder.Entity<Location>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity.ToTable("locations");

            entity.Property(e => e.Id)
                .ValueGeneratedNever()
                .HasColumnName("id_");
            entity.Property(e => e.LocationName)
                .HasMaxLength(255)
                .HasColumnName("location_Name_");
        });

        modelBuilder.Entity<Patient>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity.ToTable("patients");

            entity.HasIndex(e => e.UserId, "user_id_");

            entity.Property(e => e.Id).HasColumnName("id_");
            entity.Property(e => e.Address)
                .HasMaxLength(255)
                .HasColumnName("address_");
            entity.Property(e => e.Contact)
                .HasMaxLength(255)
                .HasColumnName("contact_");
            entity.Property(e => e.Dob).HasColumnName("dob_");
            entity.Property(e => e.Email)
                .HasMaxLength(255)
                .HasColumnName("email_");
            entity.Property(e => e.Fname)
                .HasMaxLength(255)
                .HasColumnName("fname_");
            entity.Property(e => e.Gender)
                .HasMaxLength(255)
                .HasColumnName("gender_");
            entity.Property(e => e.Lname)
                .HasMaxLength(255)
                .HasColumnName("lname_");
            entity.Property(e => e.Password)
                .HasMaxLength(255)
                .HasColumnName("password_");
            entity.Property(e => e.UserId).HasColumnName("user_id_");

            entity.HasOne(d => d.User).WithMany(p => p.Patients)
                .HasForeignKey(d => d.UserId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("patients_ibfk_1");
        });

        modelBuilder.Entity<Question>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity.ToTable("questions");

            entity.Property(e => e.Id)
                .ValueGeneratedNever()
                .HasColumnName("id_");
            entity.Property(e => e.Questions)
                .HasMaxLength(255)
                .HasColumnName("questions_");
        });

        modelBuilder.Entity<Role>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity.ToTable("roles");

            entity.Property(e => e.Id)
                .ValueGeneratedNever()
                .HasColumnName("id_");
            entity.Property(e => e.RoleType)
                .HasMaxLength(3)
                .IsFixedLength()
                .HasColumnName("role_type_");
        });

        modelBuilder.Entity<Schedule>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity.ToTable("schedules");

            entity.HasIndex(e => e.DoctorId, "doctor_id_");

            entity.Property(e => e.Id).HasColumnName("id_");
            entity.Property(e => e.Date).HasColumnName("date_");
            entity.Property(e => e.DoctorId).HasColumnName("doctor_id_");
            entity.Property(e => e.EndTime)
                .HasColumnType("time")
                .HasColumnName("end_time_");
            entity.Property(e => e.StartTime)
                .HasColumnType("time")
                .HasColumnName("start_time_");

            entity.HasOne(d => d.Doctor).WithMany(p => p.Schedules)
                .HasForeignKey(d => d.DoctorId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("schedules_ibfk_1");
        });

        modelBuilder.Entity<Speciality>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity.ToTable("specialities");

            entity.Property(e => e.Id)
                .ValueGeneratedNever()
                .HasColumnName("id_");
            entity.Property(e => e.SpecialitiesName)
                .HasMaxLength(255)
                .HasColumnName("specialities_Name_");
        });

        modelBuilder.Entity<Subscriptionplan>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity.ToTable("subscriptionplans");

            entity.Property(e => e.Id).HasColumnName("id_");
            entity.Property(e => e.DescripOfSub)
                .HasMaxLength(255)
                .HasColumnName("descripOfSub_");
            entity.Property(e => e.MonthlyPrice).HasColumnName("monthly_price_");
            entity.Property(e => e.PlanName)
                .HasMaxLength(255)
                .HasColumnName("plan_name_");
            entity.Property(e => e.Status).HasColumnName("status_");
        });

        modelBuilder.Entity<Transaction>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity.ToTable("transactions");

            entity.HasIndex(e => e.DoctorId, "doctor_id_");

            entity.HasIndex(e => e.SubscriptionId, "subscription_id_");

            entity.Property(e => e.Id).HasColumnName("id_");
            entity.Property(e => e.Amount).HasColumnName("amount_");
            entity.Property(e => e.DoctorId).HasColumnName("doctor_id_");
            entity.Property(e => e.PaymentDate).HasColumnName("payment_date_");
            entity.Property(e => e.PaymentMethod)
                .HasMaxLength(255)
                .HasColumnName("payment_method_");
            entity.Property(e => e.SubscriptionId).HasColumnName("subscription_id_");

            entity.HasOne(d => d.Doctor).WithMany(p => p.Transactions)
                .HasForeignKey(d => d.DoctorId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("transactions_ibfk_1");

            entity.HasOne(d => d.Subscription).WithMany(p => p.Transactions)
                .HasForeignKey(d => d.SubscriptionId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("transactions_ibfk_2");
        });

        modelBuilder.Entity<User>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity.ToTable("users");

            entity.HasIndex(e => e.QuestionId, "question_id_");

            entity.HasIndex(e => e.RoleId, "role_id_");

            entity.Property(e => e.Id).HasColumnName("id_");
            entity.Property(e => e.Answer)
                .HasMaxLength(255)
                .HasColumnName("answer_");
            entity.Property(e => e.Email)
                .HasMaxLength(255)
                .HasColumnName("email_");
            entity.Property(e => e.Password)
                .HasMaxLength(255)
                .HasColumnName("password_");
            entity.Property(e => e.QuestionId).HasColumnName("question_id_");
            entity.Property(e => e.RoleId).HasColumnName("role_id_");
            entity.Property(e => e.Status).HasColumnName("status_");

            entity.HasOne(d => d.Question).WithMany(p => p.Users)
                .HasForeignKey(d => d.QuestionId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("users_ibfk_2");

            entity.HasOne(d => d.Role).WithMany(p => p.Users)
                .HasForeignKey(d => d.RoleId)
                .HasConstraintName("users_ibfk_1");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
